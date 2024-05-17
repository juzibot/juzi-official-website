import { FC, useEffect, useState } from "react";
import cls from 'classnames';
import AutoSizer from "react-virtualized-auto-sizer";
import { useMediaQuery } from "@react-hookz/web";

type Props = {
  className?: string,
}

const filePaths = [
  "GPT-3.5.png",
  "GPT-4.png",
  "BaiChuan.png",
  "ZhiPu.png",
  "MINIMAX.png",
  "WenXinYiYan.png",
  "XunFeiXingHuo.png",
  "Moonshot-AI.png",
  "ChatGLM.png",
  "YanXi.png",
  "PanGu.png",
  "TongYi.png",
  "FuXi.png",
  "HunYuan.png",
  "Moss.png",
  "Sensetime.png",
  "TianGong.png",
  "Google-Bard.png"
].map(fileName => `_images/icons/llm-logo/${fileName}`);

const getMiddleIndex = (endIndex: number) => parseInt(((endIndex - 1) / 2).toString());

const getMaxShowCount = (boxHeight: number, unitHeight: number, heightChange: number, gap: number) => {
  const calculateTotalHeight = (endIndex: number, middleIndex: number) => {
    let h = 0;
    for (let i = 0; i < endIndex; i++) {
      const itemHeight = unitHeight - (Math.abs(i - middleIndex)) * heightChange;
      h = h + itemHeight + (i === 0 ? 0 : gap);
    }
    return h;
  }

  let endIndex = 3;
  let middleIndex = getMiddleIndex(endIndex);
  let h = calculateTotalHeight(endIndex, middleIndex);

  while (h < boxHeight) {
    const nextEndIndex = endIndex + 2;
    const nextMiddleIndex = getMiddleIndex(nextEndIndex);
    const nextH = calculateTotalHeight(nextEndIndex, nextMiddleIndex);
    if (nextH > boxHeight) {
      break;
    }
    endIndex = nextEndIndex;
    middleIndex = nextMiddleIndex;
    h = nextH;
  }

  return endIndex;
}

export const LlmLogos: FC<Props> = ({ className }) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [showList, setShowList] = useState<string[]>([]);
  const [initShowCount, setInitShowCount] = useState<number>();

  useEffect(() => {
    if (initShowCount) {
      setShowList(filePaths.slice(0, initShowCount));
    }
  }, [initShowCount])

  const heightChange = 5; // px
  let unitHeight = 116;
  let unitGap = 16;

  if (isSmallDevice) {
    unitHeight = 75;
    unitGap = 12;
  }

  return (
    <div className={cls('overflow-auto flex xxxxx', className)}>
      <AutoSizer>
        {({ height, width }) => {
          const unit = unitHeight + unitGap;
          const showCount = Math.floor(height / unit);
          const middleIndex = getMiddleIndex(showCount);

          const scrollListH = unitHeight * filePaths.length + unitGap * (filePaths.length - 1);
          if (height > unitHeight && initShowCount === undefined) {
            setInitShowCount(getMaxShowCount(height, unitHeight, heightChange, unitGap));
          }
          return (
            <div style={{ height, width }}>

              {/* 图层1 border-red-500 border-dotted  */}
              <div className="h-full w-full overflow-auto absolute z-20"
                onScroll={event => {
                  const { scrollTop } = event.currentTarget;
                  const topCount = Math.floor(scrollTop / unit);
                  setShowList(filePaths.slice(topCount, topCount + showCount));
                }}
              >
                <div className="image-list flex flex-col invisible">
                  <div style={{ height: scrollListH }} />
                </div>
              </div>

              {/* 图层2 border-green-500 border-dotted  */}
              <div className="h-full absolute z-10 overflow-hidden flex flex-col items-center justify-center gap-4">
                {
                  showList.map((d, i) => {
                    const height = unitHeight - (Math.abs(i - middleIndex)) * heightChange;
                    const opacity = 1 - (Math.abs(i - middleIndex)) * 0.15;
                    return (
                      <img
                        key={d}
                        src={d}
                        alt=""
                        className={cls('border-[3px] border-solid  rounded-2xl', i === middleIndex ? 'border-[rgb(21,94,239)]' : 'border-white')}
                        style={{ height, opacity, }}
                      />
                    )
                  })
                }
              </div>
            </div>
          )
        }}
      </AutoSizer>
    </div>
  );
};