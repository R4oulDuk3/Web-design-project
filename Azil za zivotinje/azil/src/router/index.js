import { createRouter, createWebHistory } from 'vue-router'
import PocetnaView from '../views/PocetnaView.vue'
import DodajOglas from '../views/DodajOglas.vue'
import JednaZivotinjaView from '../views/JednaZivotinjaView.vue'
import ViseZivotinjaView from '../views/ViseZivotinjaView.vue'
import SveZivotinje from '../views/SveZivotinje.vue'
import ONama from '../views/ONama.vue'
import MojNalog from '../views/MojNalog.vue'
import IzgubljeniLjubimci from '../views/IzgubljeniLjubimci.vue'
const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: PocetnaView
  },
  {
    path: '/dodajOglas',
    name: 'dodajOglas',
    component: DodajOglas
  },
  {
    path: '/SveZivotinje',
    name: 'Sve Zivotinje',
    component: SveZivotinje, 
    meta: {
      breadCrumb: ['zivotinje']
    }
  },
  {
    path: '/SveZivotinje/:vrsta',
    name: 'Zivotinje',
    component: ViseZivotinjaView, //zivotinje
    meta: {
      breadCrumb: ['zivotinje']
    }
  },
  {
    path: '/SveZivotinje/:vrsta/:id',
    name: 'Zivotinja',
    component: JednaZivotinjaView,
    meta: {
      breadCrumb: ['zivotinje']
    }
  },
  {
    path: '/izgubljeniLjubimci',
    name: 'izgubljeniLjubimci',
    component: IzgubljeniLjubimci
  },
  {
    path: '/mojNalog',
    name: 'mojNalog',
    component: MojNalog
  },
  {
    path: '/oNama',
    name: 'oNama',
    component: ONama
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
