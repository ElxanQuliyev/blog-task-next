import React, { useState } from "react";
import {
  Form,
  ButtonToolbar,
  Button,
  Input,
  Container,
  FlexboxGrid,
  Panel,
  Content,
} from "rsuite";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));
const AddBlogForm = () => {
  const { title, setTitle } = useState("");
  const { tags, setTags } = useState("");
  const { content, setContent } = useState("");
  const handleSubmitHandler = (e) => {
    console.log(title);
    console.log(tags);
    console.log(content);
  };

  return (
    <Container>
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3>Add Blog</h3>} bordered>
              <Form onSubmit={handleSubmitHandler}>
                <Form.Group controlId="name">
                  <Form.ControlLabel>Title</Form.ControlLabel>
                  <Form.Control  name="name" />
                  <Form.HelpText tooltip>Title is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="tags">
                  <Form.ControlLabel>Tags</Form.ControlLabel>
                  <Form.Control
                    name="tags"
                    type="tags"
                  />
                  <Form.HelpText tooltip>Tags is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="textarea">
                  <Form.ControlLabel>Content</Form.ControlLabel>
                  <Form.Control
                    rows={5}
                    name="Content"
                    accepter={Textarea}
                  />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button type="submit" appearance="primary">
                      Submit
                    </Button>
                    <Button appearance="default">Cancel</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  );
};

export default AddBlogForm;
