routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
    {
    path: '/edlist/',
    url: './pages/edlist.html',
  },
  {
    path: '/general/',
    url: './pages/general.html',
    },
    {
    path: '/1/',
    url: './pages/1.html',
  },
      {
    path: '/2/',
    url: './pages/2.html',
  },
    
    {
    path: '/3/',
    url: './pages/3.html',
  },
      
    {
    path: '/4/',
    url: './pages/4.html',
  },
      {
    path: '/5/',
    url: './pages/5.html',
  },
    
    {
    path: '/6/',
    url: './pages/6.html',
  },
      
    {
    path: '/7/',
    url: './pages/7.html',
  },
      {
    path: '/8/',
    url: './pages/8.html',
  },
    
    {
    path: '/9/',
    url: './pages/9.html',
  },
      
    {
    path: '/10/',
    url: './pages/10.html',
  },
      {
    path: '/11/',
    url: './pages/11.html',
  },
    
    {
    path: '/12/',
    url: './pages/12.html',
  },
      
    {
    path: '/13/',
    url: './pages/13.html',
  },
      {
    path: '/14/',
    url: './pages/14.html',
  },
    
    {
    path: '/15/',
    url: './pages/15.html',
  },
      
    {
    path: '/16/',
    url: './pages/16.html',
  },
      {
    path: '/17/',
    url: './pages/17.html',
  },
    
    {
    path: '/18/',
    url: './pages/18.html',
  },
      
    {
    path: '/19/',
    url: './pages/19.html',
  },
      {
    path: '/20/',
    url: './pages/20.html',
  },
    
    {
    path: '/21/',
    url: './pages/21.html',
  },
  {
    path: '/catalog/',
    componentUrl: './pages/catalog.html',
  },
  {
    path: '/product/:id/',
    componentUrl: './pages/product.html',
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
