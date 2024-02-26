import { ApolloClient, HttpLink, InMemoryCache }from '@apollo/client'
import {registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

export const {getClient} = registerApolloClient(() => {
    const API_URL = ""+window.location.protocol+"//"+window.location.hostname+":4001/api/"

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({uri: API_URL}),
    });

});