# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Create vite+react application
Remove unecessary code and print hello world
Install tailwind CSS
Install Daisy UI
Add Nav var component to App component
Create separate Navbar separate file
Install react router // npm i react-router-dom
Create BrowserRouter -> Routes -> Route =/ Body->RouteChildre
Create an outlet in your Body Component
Install axios
CORS -> install cors in backend, add midlleware with configrations, origin, credentials-> true
whenever we are making API call so pass axios {withCredentails: true}
Install react-redux, redux-toolkit ==> configureStore ==> Provider =>  createSlice => add reducer to store
Add redux dev tools in chrome
Login and see if data coming properly in store
Refactor code 
If no token, redirect user to profile page
/profile
/logout


// AWS instance steps
// Deployment
Sign in into AWS
Launch instance
chmod 400 <secret>.pem
<!-- chmod 400 "devHookUP.pem"   <secret.pem> -->
ssh -i "devHookUP.pem" ubuntu@ec2-13-51-79-224.eu-north-1.compute.amazonaws.com
install node
git clone

<!-- # Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24 // nvm install v20.20.1

# Verify the Node.js version:
node -v # Should print "v24.14.0".

# Verify npm version:
npm -v # Should print "11.9.0". -->
 front end
 npm install
 npm run build (for dist creation)
 we will use nginx to host our fornt end project
 // sudo apt update
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
copy code from dist(folder) to ngnix path (var/www/html)
sudo scp -r dist/* /var/www/html/
enable port 80 to make this work 
install pm2 to keep application running by 24/7
npm install pm2 -g
pm2 start npm -- start
pm2 list
pm2 restart <name of process>
pm2 delete <name of process>
pm2 start npm --name "devHookUpBackend" -- start
pm2 logs

// ngnix configs 
sudo nano /etc/nginx/sites-available/default

server_name 13.51.79.224;

location /api {
        proxy_pass http://localhost:3000/; # Pass request to node js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

sudo systemctl restart nginx
sudo systemctl enable nginx

Modify the front end BASE_URL from  "localhost:3000" to /api/