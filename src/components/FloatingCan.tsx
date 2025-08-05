"use client";
import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { Environment, Float } from "@react-three/drei";
import { ReactNode, forwardRef } from "react";
import { Group } from "three";
type FloatingCanProps = {
    flavor?: SodaCanProps["flavor"];
    flotSpeed?: number;
    rotationIntensity?: number;  
    floatIntensity?: number;
    floatngRange?: [number, number]
    children?: ReactNode; 
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  ({
    flavor = "blackCherry",
    flotSpeed = 1.5,
    rotationIntensity = 1,
    floatIntensity = 1,
    floatngRange = [-0.1, 0.1],
    children,
    ...props
  }, ref
  
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={flotSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatngRange}
        >
            {children}
          <SodaCan flavor={flavor}/>
        </Float>
      </group>
    );
  }
);
FloatingCan.displayName = "FloatingCan";
export default FloatingCan;
