import React from "react";

function Stats({ item }) {
  if(!item.length) {
    return (
      <footer className="footer">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    )
  }
  const numItems = item.length;
  const numOfPackedItems = item.filter((item) => item.packed).length;
  const packedPercentageItems = Math.round((numOfPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentageItems === 100
          ? "You got everything! Ready to go ✈️"
          : `🎒 You have ${numItems} items on your list, and you already packed ${numOfPackedItems} (${packedPercentageItems}%)`}
      </em>
    </footer>
  );
}

export default Stats;
