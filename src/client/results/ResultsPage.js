import React, {Component} from 'react';

class ResultsPage extends Component{
render(){
return(
<div className="container">
<header className="px-4 py-3 shadow bg-blue-900">
      <div className="container mx-auto">
        <h1
          className="text-2xl text-gray-100 tracking-wider font-bold leading-none"
        >
          Fireworks
        </h1>
        <h2
          className="text-sm text-gray-300 tracking-widest font-semibold uppercase leading-none"
        >
          Entertainment
        </h2>
      </div>
    </header>
   <h1>Resultlist of movies/tv shows</h1>
  <div className="container mx-auto pb-4">
      <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Star Wars"
        ></div>
        <div
          className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Star Wars
            </div>
            <p className="text-gray-700 text-base">
              Princess Leia is captured and held hostage by the evil Imperial
              forces in their effort to take over the galactic Empire.
              Venturesome Luke Skywalker and dashing captain Han Solo team
              together with the loveable robot duo R2-D2 and C-3PO...
            </p>
          </div>
          <div className="text-sm">
            <p className="text-gray-600">May 25, 1977</p>
          </div>
        </div>
      </div>
</div>
)
}
}
export default ResultsPage;
