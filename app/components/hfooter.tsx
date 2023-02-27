import React from 'react'
import Image from 'next/image'

const Hfooter = () => {
return (
  <div className="xl:max-w-6xl xl:mx-auto grid grid-cols-1 lg:grid-col-2 xl:grid-cols-4 mt-16  pb-8">
    <div>
      <Image
        src="/m1.png"
        alt="Picture of the author"
        width={357}
        height={38}
        className="pt-2"
      />
    </div>
    <div>
      <Image
        src="/m2.png"
        alt="Picture of the author"
        width={396}
        height={41}
        className="pt-2"
      />
    </div>
    <div>
      <Image
        src="/m3.png"
        alt="Picture of the author"
        width={315}
        height={43}
      />
    </div>
    <div>
      <Image
        src="/m4.png"
        alt="Picture of the author"
        width={313}
        height={42}
      />
    </div>
  </div>
);
}

export default Hfooter
