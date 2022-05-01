import { PersistentStore } from "./main";

interface Base extends Object {
  viewMode: 'desktop' | 'mobile'
}

class BaseStore extends PersistentStore<Base> {
  protected data(): Base {
    return {
      viewMode: null,
    };
  }

  setViewMode(viewMode: 'desktop' | 'mobile') {
    this.state.viewMode = viewMode;
  }
}

export const baseStore = new BaseStore("base");