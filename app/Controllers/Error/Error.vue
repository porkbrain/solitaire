<template id="error-template">
  <div class="content">
    <div class="left">
      <h1>Wups! This page does not exist :-(</h1>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('app', {
    template: '#error-template'
  })
</script>
