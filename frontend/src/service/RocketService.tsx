
type Data = {
  id: number
  name: string
}

// export const RenderRocket: React.FC = () => {
// const data = GetRocket();
// console.log(data);

// return (
{/* <div>
  {data && data.length > 0 ? (
    <RocketTable data={data} />
  ) : (
    <div>No data available</div> // call notification
  )}
</div> */}
// )
// }

export const GetRocket = async () => {
  const response = await fetch('http://localhost:80/rocket')
  if (!response.ok) {
    throw new Error('Error in request') // call notification
  }
  const jsonData = await response.json()
  return jsonData;
}

export const SubmitRocket = async (formData: Data) => {
  const response = await fetch('http://localhost:80/rocket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }
  const jsonData = await response.json();
  console.log(jsonData);

  return jsonData;

};

export const UpdateRocket = async (id: number, formData: Partial<Data>) => {
  const response = await fetch(`http://localhost:80/rocket/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }
  const jsonData = await response.json();
  return jsonData;

};

export const DeleteRocket = async (id: number) => {
  const response = await fetch(`http://localhost:80/rocket/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }
};