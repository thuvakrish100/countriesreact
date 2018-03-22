import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'India',
        Capital: 'New Delhi',
        Prime_Minister: 'Narendra Modi',
        Population: '1.324 billion (2016) ',
        media: 'http://cdn.4alltravelers.com/wp-content/uploads/2015/01/Welcome-to-India-Business-or-pleasure.jpg',
        Currencies: 'Indian rupee, Indian rupee sign'

    },
    {
        id: 2,
        name: 'England',
        Capital: 'London',
        Prime_Minister: ' Theresa May',
        Population: '53.01 million',
        media: 'https://i.ytimg.com/vi/ClMZQ837VuY/maxresdefault.jpg',
        Currencies: 'Pound sterling'

    },
    {
        id: 3,
        name: 'Singapore',
        Capital: 'Pulau Ujong',
        Prime_Minister: 'Lee Hsien Loong',
        Population: '5.607 million (2016)',
        media: 'https://i.ytimg.com/vi/LU-wfiGUiS4/maxresdefault.jpg',
        Currencies: 'Singapore dollar'

    },
    {
        id: 4,
        name: 'Canada',
        Capital: 'Ottawa',
        Prime_Minister: 'Justin Trudeau',
        Population: '36.29 million (2016)',
        media: 'https://i.ytimg.com/vi/ABoGpmelmCo/maxresdefault.jpg',
        Currencies: 'Candian Dollar'
        

    },
    {
        id: 5,
        name: 'America',
        Capital: 'Washington, D.C.',
        Prime_Minister: 'Donald Trump',
        Population: '325.7 million (2017)',
        media: 'https://i.ytimg.com/vi/IOldl2HxnKE/maxresdefault.jpg',
        Currencies: 'U.S Dollar'

    },
];

render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/cars" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/cars/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
