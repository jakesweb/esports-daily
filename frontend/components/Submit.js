import styled from "styled-components";

const FormStyle = styled.form`
  label {
    font-size: 1.2em;
    font-weight: 600;
    font-style: italic;
    color: #010101;
    display: block;
  }
  input[type="text"],
  textarea {
    width: 50em;
  }
  #tags {
    margin: 0 auto;
    margin-bottom: 2em;
    display: block;
  }
  input[type="checkbox"] {
    margin: 0 auto;
  }
  button {
    font-size: 1.5em;
    font-weight: 600;
    font-style: italic;
  }
`;

const BodyDiv = styled.div`
  text-align: center;
`;

const Submit = () => (
  <BodyDiv>
    <h1>Submit an article</h1>
    <FormStyle>
      <label for="title">TITLE</label>
      <input type="text" id="title" />
      <label for="description">DESCRIPTION</label>
      <input type="text" id="description" />
      <label for="body">BODY (MARKDOWN SUPPORTED)</label>
      <textarea rows="30" cols="50" id="body" />
      <label for="publish">PUBLISH</label>
      <input type="checkbox" id="publish" />
      <label for="tags">TAGS</label>
      <input type="text" id="tags" />
      <button type="submit" id="submit">
        Submit
      </button>
    </FormStyle>
  </BodyDiv>
);

export default Submit;
