<template>
  <div>

    <div class="item">
      <p>По массиву</p>
      <component v-for="item in componentsArr" :key="item.id" :is="item.component" v-bind="item.args"></component>
    </div>

    <div class="item">
      <p>По объекту</p>
      <component v-for="(value, name) in componentsObj" :key="name" :is="name" v-bind="value"></component>
    </div>

  </div>
</template>

<script>
  import ComponentCard from "~/components/ComponentCard";
  import ComponentSlider from "~/components/ComponentSlider";
  import ComponentTitle from "~/components/ComponentTitle";

  export default {
    name: 'MainPage',
    components: {
      ComponentCard,
      ComponentSlider,
      ComponentTitle,
    },
    data: () => ({
      componentsArr: [
        { id: 1, component: 'ComponentCard', args: { title: 'element' } },
        { id: 2, component: 'ComponentSlider', args: { type: 'top' } },
        { id: 3, component: 'ComponentTitle', args: { title: 'title' } },
      ],

      componentsObj: {
        "ComponentCard": { id: 1, title: 'element' },
        "ComponentSlider": { id: 2, type: 'top' },
        "ComponentTitle": { id: 3, title: 'title' },
      },
    })
  }
</script>

<style lang="scss">
  .item{
    padding: 20px 0;
  }
</style>