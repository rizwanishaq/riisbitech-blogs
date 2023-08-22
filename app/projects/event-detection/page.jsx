"use client";
import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import ProcessAudio from "@/components/ProcessAudio";
const EventDetection = () => {
  //   Constant for APP
  const MODEL_URL = "https://tfhub.dev/google/tfjs-model/yamnet/tfjs/1";
  const CLASS_MAP_URL =
    "https://raw.githubusercontent.com/rizwanishaq/event-detection-tensorflow/main/src/yamnet_class_map.csv";

  const [labels, setLabels] = useState({});
  const [model, setModel] = useState(null);
  const [start, setStart] = useState(false);
  const [top5, setTop5] = useState([]);

  useEffect(() => {
    fetch(CLASS_MAP_URL)
      .then((response) => response.text())
      .then((json) => {
        const labelarray = json.split("\n");
        // eslint-disable-next-line
        labelarray.map((array) => {
          const split = array.split(",");

          if (split[0] !== "index" && split !== undefined) {
            setLabels((prevState) => ({
              ...prevState,
              [split[0]]: split[2],
            }));
          }
        });
      });
  }, []);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadGraphModel(MODEL_URL, {
        fromTFHub: true,
      });
      setModel(model);
    };
    loadModel();
  }, []);
  return (
    <section className="flex items-center justify-center min-w-screen p-4">
      {start && model && (
        <ProcessAudio
          labels={labels}
          model={model}
          top5={top5}
          setTop5={setTop5}
        />
      )}
      <div className="flex flex-col items-center space-y-12 max-w-2xl w-full mx-auto">
        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow-2xl sm:p-6 ">
          <div className="flex items-center p-3 text-base font-bold rounded-lg">
            <span className={"flex-1 ml-3 whitespace-nowrap"}>
              Event Detection
            </span>{" "}
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium  rounded-full">
              <button
                type="submit"
                className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
                onClick={() => setStart(!start)}
              >
                {!start ? "start" : "stop"}
              </button>
            </span>
          </div>
          <ul className="my-4 space-y-3 items-center">
            {top5.map((item, index) => (
              <li
                key={index}
                className="items-center p-3 text-base font-bold rounded-lg bg-veryPaleRed"
              >
                {item}
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default EventDetection;
