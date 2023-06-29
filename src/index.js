import React, { useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import {
  Text,
  Heading,
  Flex,
  Box,
  Textarea,
  ChakraProvider,
  Divider
} from "@chakra-ui/react";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const placeholder = `
  # Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '...' && lastLine == '...') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [editorState, setEditorState] = useState(placeholder);

  function handleChange(event) {
    setEditorState(event.target.value);
  }
  return (
    <Flex bg="gray.300">
      <Box boxShadow="inner" id="editor-box" width="30vw" bg="gray.100" p={8}>
        <Text mb={4} color="gray.500" fontSize="2xl" fontWeight="bold">
          Markdown Editor
        </Text>
        <Divider />
        <Textarea
          value={editorState}
          id="editor"
          onChange={handleChange}
          color="gray.700"
          height="90%"
        ></Textarea>
      </Box>
      <Box width="70vw" id="preview" bg="gray.300" p={8}>
        <Text
          fontWeight="medium"
          color="gray.500"
          mb={4}
          bg="gray.100"
          p={4}
          boxShadow="md"
          rounded={4}
          fontSize="xl"
        >
          Preview
        </Text>
        <ReactMarkdown
          components={ChakraUIRenderer()}
          children={editorState}
          skipHtml
        />
      </Box>
    </Flex>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
