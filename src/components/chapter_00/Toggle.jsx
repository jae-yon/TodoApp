import { useState } from "react";

function Toggle(props) {
	const [isOpen, setIsOpen] = useState(false);

  const Handler = () => {
    setIsOpen(!isOpen);
  }
	
	return (
    <div>
      <button onClick={Handler}> {isOpen ? `on`:`off`} </button>
    </div>
	);
}

export default Toggle;