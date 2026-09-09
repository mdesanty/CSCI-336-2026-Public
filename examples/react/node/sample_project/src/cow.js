import { say } from "cowsay";

const speak = (message) => {
  return say({
    text: message
  });
}

const speakSilly = (message) => {
  return say({
    text: message,
    e: "oo", // override eyes to be silly
    T: "U ", // override tongue to be silly
  });
}

export { speak, speakSilly };