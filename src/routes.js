import Home from "./components/Home";
//import About from "./components/About";
//import AboutDetails from "./components/Aboutdetails";
import Contact from "./components/Contact";

import About            from './components/whoweare/About';
import Careers          from './components/whoweare/Careers';
import OurProcess       from './components/whoweare/OurProcess';

import WebsiteDevelopment       from './components/services/WebsiteDevelopment';
import RestfullApis             from './components/services/RestfullApis';
import ReactiveApplications     from './components/services/ReactiveApplications';
import FullMeanStackDevelopment from './components/services/FullMeanStackDevelopment';
import ThirdPartyIntegrations   from './components/services/ThirdPartyIntegrations';
import MachineLearning          from './components/services/MachineLearning';

import DataAnalytics            from './components/whatwedo/DataAnalytics';
import DevopsAndTesting         from './components/whatwedo/DevopsAndTesting';
import DynamicWebSolutions      from './components/whatwedo/DynamicWebSolutions';

import CaseStudies              from './components/CaseStudies';
import CaseDetails              from './components/CaseDetails';

export default [
    { path: "/", component: Home, exact: true, },
    //{ path: "/about", component: About, exact: true, },
    //{ path: "/about/:id", component: AboutDetails, exact: true, },
    { path: "/contact", component: Contact, exact: true, },
    { path: "/who-we-are/about", component: About, exact: true, },
    { path: "/who-we-are/careers", component: Careers, exact: true, },
    { path: "/who-we-are/our-process", component: OurProcess, exact: true, },

    { path: "/service/website-development", component: WebsiteDevelopment , exact: true, },
    { path: "/service/restfull-apis", component: RestfullApis, exact: true, },
    { path: "/service/reactive-applications", component: ReactiveApplications, exact: true, },
    { path: "/service/full-mean-stack-development", component: FullMeanStackDevelopment, exact: true, },
    { path: "/service/third-party-integrations", component: ThirdPartyIntegrations, exact: true, },
    { path: "/service/machine-learning", component: MachineLearning, exact: true, },

    { path: "/what-we-do/data-analytics", component: DataAnalytics, exact: true, },
    { path: "/what-we-do/devops-and-testing", component: DevopsAndTesting, exact: true, },
    { path: "/what-we-do/dynamic-web-solutions", component: DynamicWebSolutions, exact: true, },

    { path: "/case-studies", component: CaseStudies, exact: true, },
    { path: "/case-studies/:title", component: CaseDetails, exact: true, },
];