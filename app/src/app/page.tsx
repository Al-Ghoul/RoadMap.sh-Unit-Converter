import LengthConverter from "./_components/LengthConverter";
import WeightConverter from "./_components/WeightConverter";
import TemperatureConverter from "./_components/TemperatureConverter";

export default function Home() {
  return (
    <main className="flex w-screen h-screen p-3 items-center justify-center bg-white">
      <div className="tabs">
        <input type="radio" name="tabs" id="tabone" defaultChecked />
        <label htmlFor="tabone">Length</label>
        <div className="tab">
          <LengthConverter />
        </div>

        <input type="radio" name="tabs" id="tabtwo" />
        <label htmlFor="tabtwo">Weight</label>
        <div className="tab">
          <WeightConverter />
        </div>

        <input type="radio" name="tabs" id="tabthree" />
        <label htmlFor="tabthree">Temperature</label>
        <div className="tab">
          <TemperatureConverter />
        </div>
      </div>
    </main>
  );
}
