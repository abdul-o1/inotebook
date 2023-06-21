import Note from "./Note.js";

export const Home = (props) => {
 const {showAlert} = props;
  return (
    <div>  
      <Note showAlert= {showAlert} />
    </div>
  );
};

