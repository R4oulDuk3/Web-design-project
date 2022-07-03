<template>
  <nav class="bread" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(crumb, ci) in this.crumbs"
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
.bread{
  margin-top:3rem ;
}

.breadcrumb-item {
    font-family: 'Courier New', Courier, monospace, sans-serif;
}
</style>
<script>
import { useRoute } from 'vue-router';
export default {
    name: "BreadCrumbs",
    data(){
      return {
        crumbs:[]
      }
    },
    created(){
      console.log("crumbs: "+this.$route.meta.breadCrumb)
      console.log(useRoute().name)
      console.log(this.$router.currentRoute.value.path)
      this.crumbs = this.$router.currentRoute.value.path.slice(1).split('/')

      console.log(this.crumbs)
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
          console.log('curmb')
          console.log(crumb)
            if (crumb == 'Mace' || crumb == 'Kuce' || crumb == 'Ptice') {
              this.$router.push({ path : '/SveZivotinje/'+crumb});
            } else if(crumb == 'SveZivotinje') {
              this.$router.push({ path : "/"+crumb});
            }
        },
    },
};
</script>