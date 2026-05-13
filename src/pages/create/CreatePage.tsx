import { type FC } from "react";
import "./CreatePage.css";
import { Button } from "../../shared";
import { useCreateTodo } from "../../features";

export const CreatePage: FC = () => {
  const { title, errorMSG, handleChange, handleCreate } = useCreateTodo();
  return (
    <main className="create-page">
      <div className="container">
        <form className="create-form" onSubmit={(e) => e.preventDefault()}>
          <h5 className="create-form-title">Create new Todo element</h5>
          <p className="create-form-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quam.</p>
          {errorMSG && <span className="create-form-error">{errorMSG}</span>}
          <label htmlFor="title" className="create-form-label">
            Title:
          </label>
          <input
            className="create-form-input"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
          />
          <Button view="accent" onClick={handleCreate}>
            Create
          </Button>
        </form>
      </div>
    </main>
  );
};
