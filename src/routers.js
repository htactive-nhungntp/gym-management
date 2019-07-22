import React from 'react';
const routes = [
    {
        path : "/",
        exact : true,
        page : () => <HomePage/>
    },
    {
        path : "/employee/add",
        exact : false,
        page : ({history}) => <ActionPage history={history}/>
    },
    {
        path : "/employee/:id/edit",
        exact : false,
        page : ({match, history}) => <ActionPage match={match} history={history}/>
    },
    {
        path : "/employee-list",
        exact : false,
        page : () => <ListPage />
    },
    {
        path : "",
        exact : false,
        page : () => <PageNotFound/> 
    }
];

export default routes;
    <Route
            exact
            path="/"
            component={({ match }) => (
              <Table dataTable={members} match={match} />
            )}
          />
          <Route
            exact
            path="/EditMember/:id"
            component={({ match }) => <EditingMember match={match} />}
          />
          {/* <Route path="/EditMember" component={MemberEditing} /> */}
          {/* <Route path="/DeleteMember" component={Detail} />
          <Route path="/AddMember" component={Detail} />
          <Route path="/PaymentDay" component={Detail} />
          <Route path="/PaymentMonth" component={Detail} /> */}
          {/*  */}