import Button from "./button";
import Tag from "./tag";

const components = [Button, Tag];

export { Button, Tag };
export default {
  install: function (Vue) {
    components.forEach((comp) => {
      Vue.component(comp.name, comp);
    });
  },
};
