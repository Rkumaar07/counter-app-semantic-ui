import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Button, Header, Container } from "semantic-ui-react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container textAlign='center'>
        <Segment raised style={{margin: "15% 37% 3%", padding: "3% 4%", borderRadius: "8px" }}>
            {/* Single inline CSS USED */}
            <Grid columns={2}>
                    <Container textAlign="center">
                        <Header as='h4'>Count</Header>
                        <Header as='h1'>{count}</Header>
                    </Container>
                <Grid.Row>
                    <Button
                    positive
                    onClick={() => setCount(count + 1)}
                    content="Increment"
                    />
                    <Button
                    negative
                    disabled={count === 0}
                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                    content="Decrement"
                    />
                </Grid.Row>
            </Grid>
        </Segment>
        <Header as={"h5"}>Done By Rohit Kumar Thakur - 12010323</Header>
    </Container>
  );
}

export default Counter;

