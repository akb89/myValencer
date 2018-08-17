<template>
  <div class="content is-small">
    <mark
      :fe-name="feh.name"
      :label-format="$store.state.feColorMap[feh.name]">
    </mark>

    <pre
      :slot="`body-${idx}`"
      style="background-color:#ffffff;"
    >

├── less/
├── js/
├── fonts/
├── dist/
│   ├── css/
│   ├── js/
│   └── fonts/
└── docs/
└── examples/
    </pre>
  </div>
</template>

<script>
  module.exports = require('./FEHierarchy');
</script>
