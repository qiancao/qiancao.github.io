// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-software",
          title: "Software",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "post-welcome-to-jekyll",
      
        title: "Welcome to Jekyll!",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/jekyll/update/2025/01/26/welcome-to-jekyll.html";
        
      },
    },];
