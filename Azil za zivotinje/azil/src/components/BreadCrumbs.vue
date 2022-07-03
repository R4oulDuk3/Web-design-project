<template>
  <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(crumb, ci) in breadCrumbs"
        :key="ci"
        class="breadcrumb-item align-items-center"
      >
        <a :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
          {{ crumb }}
        </a>
      </li>
    </ol>
  </nav>
</template> 
<style scoped>

.breadcrumb {
    padding-left: 15px;
    background-color: rgb(204, 255, 223);
}

a:hover {
    cursor: pointer;
}


.breadcrumb-item {
    font-family: 'Courier New', Courier, monospace, sans-serif;
}
</style>
<script>

export default {
    name: "BreadCrumbs",
    props: {
        crumbs: {
        type: Array,
        required: true,
        },
    },
    computed: {
        breadCrumbs() {
            return this.$route.meta.breadCrumb;
        },
    },
    methods: {
        isLast(index) {
            return index === this.breadCrumbs.length - 1;
        },
        selected(crumb) {
            if (crumb == 'Mace' || crumb == 'Kuce' || crumb == 'Ptice') {
              this.$router.push({ path : '/SveZivotinje/'+crumb});
            } else {
              this.$router.push({ name : crumb});
            }
        },
    },
};
</script>