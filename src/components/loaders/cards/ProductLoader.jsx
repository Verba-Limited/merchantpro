import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductLoader = ({ color }) => {
  return (
    <div
      className={`p-4 rounded-lg min-w-[400px] max-[960px]:min-w-[200px] animate-pulse`}
      style={{ backgroundColor: color || "#F1F4F6" }}
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <h4 className="text-2xl font-medium leading-[36px] max-[465px]:text-[20px] max-[465px]:leading-[28px]">
            <Skeleton width={200} height={15} borderRadius={30} />
          </h4>
        </div>
        <div>
          <Skeleton width={24} height={24} borderRadius={50} />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4 max-[365px]:flex-col max-[365px]:items-start max-[365px]:gap-y-1">
          <div className="flex gap-2 items-center">
            <div>
              <Skeleton width={24} height={24} borderRadius={50} />
            </div>
            <div className="text-ltblue text-sm font-normal leading-[20px] max-[465px]:text-xs max-[465px]:leading-[18px]">
              <Skeleton width={100} height={10} borderRadius={10} />
            </div>
          </div>
          <div className="flex gap-2 items-center max-[365px]:flex-row-reverse">
            <div>
              <h4 className="text-base font-medium max-[465px]:text-sm max-[465px]:leading-[20px]">
                <Skeleton width={100} height={10} borderRadius={10} />
              </h4>
            </div>
            <div>
              <Skeleton width={24} height={24} borderRadius={50} />
            </div>
          </div>
        </div>
        <div>
          <Skeleton width={100} height={17} borderRadius={30} />
        </div>
        <div className="mt-4">
          <Skeleton width={300} height={10} borderRadius={10} />
          <Skeleton width={180} height={10} borderRadius={10} />
          <Skeleton width={100} height={17} borderRadius={30} />
        </div>
      </div>
      <div className="border-t border-dpwhite mt-6 pt-4 flex items-center justify-between flex-wrap gap-y-1">
        <div className="flex items-center gap-2">
          <div>
            <Skeleton width={24} height={24} borderRadius={50} />
          </div>
          <div>
            <Skeleton width={100} height={10} borderRadius={10} />
          </div>
        </div>
        <div className="w-1 h-1 rounded-full bg-blue110"></div>
        <div className="flex items-center gap-2">
          <div>
            <Skeleton width={24} height={24} borderRadius={50} />
          </div>
          <div>
            <Skeleton width={100} height={10} borderRadius={10} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Skeleton width={24} height={24} borderRadius={50} />
          </div>
          <div>
            <Skeleton width={100} height={10} borderRadius={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoader;
