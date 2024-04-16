import {Button, Card} from "flowbite-react";
import { ThemeContext } from './ThemeContext';

import {useContext, useEffect} from "react";
const Portfolio = () => {

  return (
      <>

          <section
              className="lg:py-13 lg:px-42 px-8 py-6 md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72 bg-white dark:bg-gray-900">
              <h2 className="mb-1 text-3xl font-semibold tracking-tight text-gray-800 dark:text-white  md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
                  Portfolio Page
              </h2>
              <p
                  className="text-lg leading-relaxed md:text-2xl md:leading-relaxed
lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed text-gray-800 dark:text-white"
              >
                  Below you can see a selection of my web design and front-end development projects.
              </p>
          </section>

          <section
              className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 pt-2 p
      xl:px-32
      lg:px-24
      md:px-14
      px-12
      ml-0 mr-0

      md:gap-6
      lg-gap-12
      p-4
      bg-white dark:bg-gray-900
      "
          >
              <Card
                  className="max-w-sm mx-auto"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="../images/project-fashion.jpg"
              >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Fashion web page project
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      A fashion web page project built with HTML and CSS.
                  </p>
                  <a href="../../public/portfolio/fashion/index.html" target="_blank" rel="noopener noreferrer">
                      <Button style={{width: 'auto', height: 'auto'}}>View project</Button>
                  </a>
              </Card>
              <Card
                  className="max-w-sm mx-auto"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="../images/project-smoothie.jpg"
              >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Smoothie web page project
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      A smoothie web page project built with HTML and CSS.
                  </p>
                  <a href="../../public/portfolio/smoothies/index.html" target="_blank" rel="noopener noreferrer">
                      <Button style={{width: 'auto', height: 'auto'}}>View project</Button>
                  </a>
              </Card>
              <Card
                  className="max-w-sm mx-auto"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="../images/project-crypto-wallet.jpg"
              >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Crypto wallet web page project
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      A crypto wallet web page project built with HTML and CSS.
                  </p>
                  <a href="../../public/portfolio/crypto_wallet/index.html" target="_blank" rel="noopener noreferrer">
                      <Button style={{width: 'auto', height: 'auto'}}>View project</Button>
                  </a>
              </Card>
          </section>

          <section
              className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 pt-2 p
      xl:px-32
      lg:px-24
      md:px-14
      px-12
      ml-0 mr-0

      md:gap-6
      lg-gap-12
      bg-white dark:bg-gray-900
      p-4
      "
          >
              <Card
                  className="max-w-sm mx-auto"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="../images/project-hero.png"
              >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Hero blocks web page project
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      A hero blocks web page project built with HTML and CSS.
                  </p>
                  <a href="../../public/portfolio/project-hero/index-1.html" target="_blank" rel="noopener noreferrer">
                      <Button style={{width: 'auto', height: 'auto'}}>View project</Button>
                  </a>
              </Card>
              <Card
                  className="max-w-sm mx-auto"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="../images/project-multi-col.png"
              >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Multi-column web page project
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      A multi-column web page project built with HTML and CSS.
                  </p>
                  <a href="../../public/portfolio/project-multi-column/index.html" target="_blank"
                     rel="noopener noreferrer">
                      <Button style={{width: 'auto', height: 'auto'}}>View project</Button>
                  </a> </Card>
              <Card
                  className="max-w-sm mx-auto"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="../images/store.png"
              >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Store web page project
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      A store web page project built with HTML and CSS.
                  </p>
                  <a href="../../public/portfolio/store/index.html" target="_blank" rel="noopener noreferrer">
                      <Button style={{width: 'auto', height: 'auto'}}>View project</Button>
                  </a>
              </Card>
          </section>
      </>
  );
};

export default Portfolio;
