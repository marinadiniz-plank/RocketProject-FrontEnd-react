import { useEffect, useState } from 'react'
import Table from '../components/Table'

type Data = {
  id: number
  name: string
}

export const RenderRocket: React.FC = () => {
  const data = GetRocket();

  return (
    <div>
      {data && data.length > 0 ? (
        <Table entityName="Rocket" data={data} />
      ) : (
        <div>No data available</div> // call notification
      )}
    </div>
  )
}

export const GetRocket = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/rocket')
        if (!response.ok) {
          throw new Error('Error in request') // call notification
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return data;
}


export const SubmitRocket = async (formData: Data) => {
  try {
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
    return jsonData;
  } catch (error) {
    console.error(error); // call notification
  }
};

export const UpdateRocket = async (formData: Partial<Data>) => {
  try {
    const response = await fetch(`http://localhost:80/rocket/${formData.id}`, {
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
  } catch (error) {
    console.error(error); // call notification
  }
};

export const DeleteRocket = async (id: number) => {
  try {

    const response = await fetch(`http://localhost:80/rocket/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error in request'); // call notification
    }
  } catch (error) {
    console.error(error); // call notification
  }
};