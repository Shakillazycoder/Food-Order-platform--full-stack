
// Helper function to format the date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };



const PaymentCard = ({ item, index }) => {
  const { email, price, date} = item;
  const formattedDate = formatDate(date); // Format the date here
  return (
    <tr>
      <th>
        {index + 1}
      </th>
      <td>
        <div>
            <h2>{email}</h2>
        </div>
      </td>
      <td className="text-[#737373]">Food Order</td>
      <td className="text-[#737373]">${price}</td>
      <th>
        <div>
            <p>{formattedDate}</p>
        </div>
      </th>
    </tr>
  );
};

export default PaymentCard;
