<template>
<svg><use :xlink:href="`#icon${type}`"></use></svg>
</template>
<script>
export default {
  props: ['type']
}
</script>