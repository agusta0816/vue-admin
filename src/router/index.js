import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/registration',
    component: Layout,
    redirect: '/example/table',
    name: 'Pendaftaran Siswa',
    meta: { title: 'Pendaftaran Siswa', icon: 'registration' },
    children: [
      {
        path: 'new-siswa',
        name: 'Input Siswa',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'Input Siswa', icon: 'user' }
      },
      {
        path: 'siswa',
        name: 'Table',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'List', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/management',
    component: Layout,
    redirect: '/example/table',
    name: 'Management',
    meta: { title: 'Management', icon: 'management' },
    children: [
      {
        path: 'new-siswa',
        name: 'Input Siswa',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'Input Siswa', icon: 'user' }
      },
      {
        path: 'siswa',
        name: 'Table',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'List', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/financial',
    component: Layout,
    redirect: '/example/table',
    name: 'Keuangan',
    meta: { title: 'Keuangan', icon: 'financial' },
    children: [
      {
        path: 'new-siswa',
        name: 'Input Siswa',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'Input Siswa', icon: 'user' }
      },
      {
        path: 'siswa',
        name: 'Table',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'List', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/lms',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'e-Learning',
    meta: {
      title: 'e-Learning',
      icon: 'lms'
    },
    children: [
      {
        path: 'kelas',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Kelas',
        meta: { title: 'Kelas', icon: 'class' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Data Kelas',
            meta: { title: 'Data Kelas', icon: 'table' }
          },
          {
            path: 'new-kelas',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Buat Data',
            meta: { title: 'Buat Data', icon: 'create' }
          }
        ]
      },
      {
        path: 'siswa',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Siswa',
        meta: { title: 'Siswa', icon: 'student' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Data Siswa',
            meta: { title: 'Data Siswa', icon: 'table' }
          },
          {
            path: 'new-siswa',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Buat Data',
            meta: { title: 'Buat Data', icon: 'create' }
          }
        ]
      },
      {
        path: 'pengajar',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Pengajar',
        meta: { title: 'Pengajar', icon: 'teacher' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Data Pengajar',
            meta: { title: 'Data Siswa', icon: 'table' }
          },
          {
            path: 'new-teacher',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Buat Data',
            meta: { title: 'Buat Data', icon: 'create' }
          }
        ]
      },
      {
        path: 'mata-pelajaran',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Mata Pelajaran',
        meta: { title: 'Mata Pelajaran', icon: 'subjects' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Data Mapel',
            meta: { title: 'Data Mapel', icon: 'table' }
          },
          {
            path: 'new-teacher',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Buat Data',
            meta: { title: 'Buat Data', icon: 'create' }
          }
        ]
      },
      {
        path: 'tugas-materi',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Tugas Siswa',
        meta: { title: 'Tugas Siswa', icon: 'subjects' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Data Tugas',
            meta: { title: 'Data Tugas', icon: 'table' }
          },
          {
            path: 'new-tugas',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Buat Tugas',
            meta: { title: 'Buat Tugas', icon: 'create' }
          }
        ]
      },
      {
        path: 'ujian-online',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Ujian Online',
        meta: { title: 'Ujian Online', icon: 'exam' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Data Tugas',
            meta: { title: 'Data Tugas', icon: 'table' }
          },
          {
            path: 'new-tugas',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Buat Ujian',
            meta: { title: 'Buat Ujian', icon: 'create' }
          }
        ]
      }
    ]
  },

  {
    path: '/assessment',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Assessment',
        component: () => import('@/views/form/index'),
        meta: { title: 'Assessment', icon: 'form' }
      }
    ]
  },

  {
    path: '/disscution-rooms',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Ruang Diskusi',
        component: () => import('@/views/form/index'),
        meta: { title: 'Ruang Diskusi', icon: 'discuss' }
      }
    ]
  },

  {
    path: '/library',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Perpustakaan',
    meta: {
      title: 'Perpustakaan',
      icon: 'books'
    },
    children: [
      {
        path: 'book-lists',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Daftar Buku',
        meta: { title: 'Daftar Buku', icon: 'books' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Data Buku',
            meta: { title: 'Data Kelas', icon: 'table' }
          },
          {
            path: 'new-buku',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Buku Baru',
            meta: { title: 'Buku Baru', icon: 'create' }
          }
        ]
      },
      {
        path: 'book-transaction',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Peminjam',
        meta: { title: 'Peminjam', icon: 'transaction' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Data Transaksi',
            meta: { title: 'Data Siswa', icon: 'table' }
          },
          {
            path: 'new-transaction',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Buat Transaksi',
            meta: { title: 'Buat Transaksi', icon: 'create' }
          }
        ]
      },
      {
        path: 'e-book',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'e-Book',
        meta: { title: 'e-Book', icon: 'e-books' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'eBoook',
            meta: { title: 'eBoook', icon: 'table' }
          },
          {
            path: 'upload-ebook',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Upload',
            meta: { title: 'Upload', icon: 'create' }
          }
        ]
      }
    ]
  },

  {
    path: '/arthicle',
    component: Layout,
    redirect: '/example/table',
    name: 'Artikel Website',
    meta: { title: 'Artikel Website', icon: 'arthicle' },
    children: [
      {
        path: 'new-post',
        name: 'Buat Post',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'Buat Post', icon: 'create' }
      },
      {
        path: 'category-post',
        name: 'Kategori',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'Kategori', icon: 'create' }
      },
      {
        path: 'list',
        name: 'List Post',
        component: () => import('@/views/siswa/index'),
        meta: { title: 'List Post', icon: 'table' }
      }
    ]
  },

  {
    path: '/system-config',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Konfigurasi',
        component: () => import('@/views/form/index'),
        meta: { title: 'Konfigurasi', icon: 'config' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
