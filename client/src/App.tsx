import axios from "axios";

const App = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await axios.post(
        "http://localhost:3000/api/subs/",
        formData
      );
      const blob = new Blob([response.data.subs], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "subtile.srt";
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*,.mkv" name="video" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
