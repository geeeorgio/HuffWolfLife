import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { LEARN_STORIES, WOLF_WORLD_LIST } from 'src/constants';
import type { PersistContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const PersistContext = createContext<PersistContextType | null>(null);

const PersistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [learningStoriesIds, setLearningStoriesIds] = useState<string[]>([]);
  const [worldIds, setWorldIds] = useState<string[]>([]);

  useEffect(() => {
    const init = async () => {
      const [savedStoriesIds, savedWorldIds] = await Promise.all([
        getItemFromStorage<string[]>('saved_learn'),
        getItemFromStorage<string[]>('saved_world'),
      ]);

      if (savedStoriesIds !== null) {
        setLearningStoriesIds(savedStoriesIds);
      }

      if (savedWorldIds !== null) {
        setWorldIds(savedWorldIds);
      }

      setIsLoading(false);
    };

    init();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setItemInStorage('saved_learn', learningStoriesIds);
    }
  }, [learningStoriesIds, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setItemInStorage('saved_world', worldIds);
    }
  }, [worldIds, isLoading]);

  const setContextLearningStoriesIds = useCallback((id: string) => {
    setLearningStoriesIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }, []);

  const setContextWorldIds = useCallback((id: string) => {
    setWorldIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }, []);

  const persistStoryList = useMemo(() => {
    const idsSet = new Set(learningStoriesIds);
    const list = LEARN_STORIES.map((story) => {
      return {
        ...story,
        isFavorite: idsSet.has(story.id),
      };
    });

    return list;
  }, [learningStoriesIds]);

  const persistWorldList = useMemo(() => {
    const idsSet = new Set(worldIds);
    const list = WOLF_WORLD_LIST.map((world) => {
      return {
        ...world,
        isFavorite: idsSet.has(world.id),
      };
    });

    return list;
  }, [worldIds]);

  const contextValue = useMemo(() => {
    return {
      isContextLoading: isLoading,
      learningStoryList: persistStoryList,
      contextLearningStoriesIds: learningStoriesIds,
      setContextLearningStoriesIds,
      worldList: persistWorldList,
      contextWorldIds: worldIds,
      setContextWorldIds,
    };
  }, [
    isLoading,
    learningStoriesIds,
    persistStoryList,
    persistWorldList,
    setContextLearningStoriesIds,
    setContextWorldIds,
    worldIds,
  ]);

  return (
    <PersistContext.Provider value={contextValue}>
      {children}
    </PersistContext.Provider>
  );
};

export default PersistContextProvider;
