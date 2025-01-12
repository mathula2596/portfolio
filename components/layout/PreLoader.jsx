"use client";
import React, { useEffect } from 'react'
import { eliscUtilits } from '@/utils/util';

export const PreLoader = () => {
    useEffect(() => {
        eliscUtilits.preloader();
      }, []);
      return (
        <div id="preloader">
          <div className="loader_line" />
        </div>
      );
}
