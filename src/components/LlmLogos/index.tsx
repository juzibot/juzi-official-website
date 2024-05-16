import { FC, useEffect, useRef, useState } from "react";
import cls from 'classnames';
import AutoSizer from "react-virtualized-auto-sizer";
import { useMediaQuery } from "@react-hookz/web";

type Props = {
  className?: string,
}

const fileNames = [
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
];

function findMiddleNumber(num: number) {
  const middle = (num + 1) / 2;
  // if (middle !== 0) {
  //   return middle;
  // }
  return Math.floor(middle);
}

// function getMax(height = 1000, unitHeight = 116, unitPadding = 16) {
//   const paddingChange = 5;
//   const opacityChange = 0.1;

//   let x = 3;
//   let middle = 2;
//   const scrollListH = unitHeight * x + unitPadding * (x - 1);

//   while (condition) {
//   }

//   return 0;
// }



// function closestOdd(number: number) {
//   // 检查给定的数是否是整数
//   if (!Number.isInteger(number)) {
//     throw new Error("Input must be an integer.");
//   }

//   // 如果是奇数，直接返回
//   if (number % 2 !== 0) {
//     return number;
//   }

//   // 如果是偶数，找到两个最近的奇数
//   let lowerOdd = number - 1;
//   let upperOdd = number + 1;

//   // 比较哪个奇数更接近
//   return Math.abs(number - lowerOdd) <= Math.abs(number - upperOdd) ? lowerOdd : upperOdd;
// }

const filePaths = fileNames.map(fileName => `_images/icons/llm-logo/${fileName}`);

export const LlmLogos: FC<Props> = ({ className }) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [showList, setShowList] = useState<string[]>([]);
  const [initShowCount, setInitShowCount] = useState<number>();

  // console.log('====render', [showList, filePaths])

  useEffect(() => {
    if (initShowCount) {
      console.log('初始化initShowCount', [initShowCount])
      setShowList(filePaths.slice(0, initShowCount));
    }
    return () => {
      console.log('取消订阅', initShowCount)
    }
  }, [initShowCount])

  let unitHeight = 116;
  let unitPadding = 16;

  if (isSmallDevice) {
    unitHeight = 75;
    unitPadding = 12;
  }

  return (
    <div className={cls('overflow-auto flex xxxxx', className)}>
      <AutoSizer>
        {({ height, width }) => {
          const unit = unitHeight + unitPadding;
          const showCount = Math.floor(height / unit);
          const middleIndex = findMiddleNumber(showCount) - 1;

          const scrollListH = unitHeight * filePaths.length + unitPadding * (filePaths.length - 1);
          if (height > unitHeight && initShowCount === undefined) {
            setInitShowCount(showCount);
          }

          // console.log('first', [height, scrollListH,])
          console.log('AutoSizer===', [showCount, findMiddleNumber(showCount), middleIndex, filePaths.slice(0, showCount)]);

          return (
            <div style={{ height, width }}>

              {/* 图层1 */}
              <div className="h-full w-full overflow-auto border-red-500 border-dotted absolute z-20"
                onScroll={event => {
                  const { scrollTop } = event.currentTarget;
                  const topCount = Math.floor(scrollTop / unit);
                  setShowList(filePaths.slice(topCount, topCount + showCount + 1));
                  console.log('滚动', [filePaths.slice(topCount, topCount + showCount)]);
                }}
              >
                <div className="image-list flex flex-col invisible">
                  <div style={{ height: scrollListH }} />
                </div>
              </div>

              {/* 图层2 */}
              <div className="h-full border-green-500 border-dotted absolute z-10 overflow-hidden flex flex-col items-center justify-center gap-4">
                {
                  showList.map((d, i) => {
                    const height = unitHeight - (Math.abs(i - middleIndex)) * 5;
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


  //   <AutoSizer>
  //     {({ height }) => {
  //       const unitHeight = 116 + 16;

  //       const showCount = Math.floor(height / unitHeight);
  //       const middleIndex = findMiddleNumber(showCount);
  //       console.log('AutoSizer===', [showCount, middleIndex])
  //       if (height && initShowCountRef.current === undefined) {
  //         initShowCountRef.current = showCount;
  //       }

  //       return (
  //         <div className={cls('h-[calc(74.5%)] overflow-auto flex xxxxx', className)}>

  //           {/* 图层1 */}
  //           {/* <div className="h-full w-full overflow-auto border-red-500 border-dotted absolute z-20" */}
  //           <div className="h-full w-full overflow-auto scrollbar-none absolute z-20"
  //             onScroll={event => {
  //               const { scrollTop } = event.currentTarget;
  //               const unit = 116 + 16;
  //               const topCount = Math.floor(scrollTop / unit);
  //               setShowList(filePaths.slice(topCount, topCount + showCount + 1));
  //               // console.log('滚动', [clientHeight, scrollTop, scrollHeight, topCount]);
  //             }}
  //           >
  //             <div className="image-list flex flex-col gap-4 invisible">
  //               {
  //                 filePaths.map(d => (
  //                   <img
  //                     key={d}
  //                     src={d}
  //                     alt=""
  //                     className="w-[300px] h-[116px] border-[3px] border-solid border-[rgb(21,94,239)] rounded-2xl"
  //                   />
  //                 ))
  //               }
  //             </div>
  //           </div>

  //           {/* 图层2 */}
  //           {/* <div className="h-full border-green-500 border-dotted absolute z-10 overflow-hidden"> */}
  //           <div className="h-full absolute z-10 overflow-hidden">
  //             <div className="image-list flex flex-col items-center gap-4">
  //               {
  //                 showList.map((d, i) => {
  //                   const height = 116 - (Math.abs(i - middleIndex)) * 5;
  //                   const opacity = 1 - (Math.abs(i - middleIndex)) * 0.15;
  //                   return (
  //                     <img
  //                       key={d}
  //                       src={d}
  //                       alt=""
  //                       className={cls('border-[3px] border-solid  rounded-2xl', i === middleIndex ? 'border-[rgb(21,94,239)]' : 'border-white')}
  //                       style={{ height, opacity, }}
  //                     />
  //                   )
  //                 })
  //               }
  //             </div>
  //           </div>
  //         </div>
  //       )
  //     }}
  //   </AutoSizer>
  // );
};