import Collection from '@/app/components/atoms/collection'

export default function CollectionList({data}) {
  console.log('lalala')
  console.log(data)
  return (
    <div className="m-auto mt-5 flex w-full max-w-[28rem] flex-col items-center rounded-lg border-0 border-(--border-color) bg-(--background) p-5 shadow-lg">
      <h2 className="w-full text-left">Mes collectes du jour ({data.length})</h2>
      {data.map((collect, index) => (
        <Collection key={index} date={collect?.date} ville={collect?.cityName} wastes={collect?.collectWastes} />
      ))}
    </div>
  )
}
