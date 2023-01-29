<script>
import { _toBigCamel } from "@fdd-ui/utils";

export default {
  name: "FddTag",
  props: {
    name: {
      type: String,
      default: "hello-world",
    },
  },
  computed: {
    _name() {
      return _toBigCamel(this.name);
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <span class="fdd-tag"> 我是tag,{{ _name }} </span>
</template>
