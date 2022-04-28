import React, { Component } from "react";
import { Breadcrumb, SimpleCard, RichTextEditor } from "@gull";
import { content1, content2, content3 } from "./richEditorContent";

class FormEditor extends Component {
  state = {
    content1: content1,
    content2: content2,
    content3: content3
  };

  handleContentChange = (contentHtml, property) => {
    this.setState({
      [property]: contentHtml
    });
  };

  render() {
    let { content1, content2, content3 } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Forms", path: "/forms" },
            { name: "Rich Editor" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-12 mb-3">
            <SimpleCard
              title="Snow Editor"
              subtitle="Your powerful rich text editor."
            >
              <RichTextEditor
                theme="snow"
                modules={{
                  toolbar: [
                    [{ size: ["small", false, "large", "huge"] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["clean"]
                  ]
                }}
                content={content1}
                handleContentChange={html =>
                  this.handleContentChange(html, "content1")
                }
                placeholder="insert text here..."
              />
            </SimpleCard>
          </div>
          <div className="col-md-12 mb-3">
            <SimpleCard
              title="Bubble Editor"
              subtitle="Your powerful rich text editor."
            >
              <RichTextEditor
                theme="bubble"
                content={content2}
                handleContentChange={html =>
                  this.handleContentChange(html, "content2")
                }
                placeholder="insert text here..."
              />
            </SimpleCard>
          </div>
          <div className="col-md-12">
            <SimpleCard
              title="Full Editor"
              subtitle="Your powerful rich text editor."
            >
              <RichTextEditor
                content={content3}
                handleContentChange={html =>
                  this.handleContentChange(html, "content3")
                }
                placeholder="insert text here..."
              />
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default FormEditor;
