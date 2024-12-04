import axios from "axios";

const App = () => {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await axios.post(
        "http://localhost:3000/api/subs/",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" name="video" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
