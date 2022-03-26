import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { environment } from '../../environments/environment';
import { WebSocketLink } from '@apollo/client/link/ws';
import { InMemoryCache } from '@apollo/client/core';

const { graphqlWSEndpoint, hasuraSecret } = environment;

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [Apollo],
  declarations: [],
})
export class GraphQLModule {
  constructor(public apollo: Apollo) {
    this.initApolloWithHeaders({
      'x-hasura-admin-secret': hasuraSecret,
    });

    // Use this for Token based authentication
    // this.initApolloWithHeaders({ authorization: 'Bearer ' + token })
  }

  private initApolloWithHeaders(headers: any) {
    const wsLink = new WebSocketLink({
      uri: graphqlWSEndpoint,
      lazy: true,
      options: {
        reconnect: true,
        lazy: true,
        connectionParams: {
          headers: headers,
        },
      },
    });

    this.apollo.create(
      {
        link: wsLink,
        cache: new InMemoryCache(),
        name: 'GrahpQL',
        version: '0.0.0',
      },
      'default'
    );
  }
}
