import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider , extendTheme } from '@chakra-ui/react';
import "@fontsource/cabin/400.css"
const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: 'red.500',
      button: '#C9FFA6'
    },
  },
  components:{
    Text:{
      variants:{
        new:{
          fonts: {
            body: `"Cabin", sans-serif`,
          }
        }
      }
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
