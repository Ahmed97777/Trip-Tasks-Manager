import React from "react";

const Stats = ({ fullList }) => {
  const fullListLength = fullList.length;
  let alreadyPacked = 0;
  let percentage = 0;

  if (!fullListLength) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🔥🚀</em>
      </p>
    );
  }

  if (fullListLength > 0) {
    alreadyPacked = fullList.filter((item) => item.packed).length;
    percentage = Math.round((alreadyPacked / fullListLength) * 100);
  }

  return (
    <p className="stats">
      <em>
        🎒 You have {fullListLength} items on your list, and you already packed{" "}
        {""}
        {alreadyPacked} {""} ({percentage}%)
      </em>
    </p>
  );
};

export default Stats;
