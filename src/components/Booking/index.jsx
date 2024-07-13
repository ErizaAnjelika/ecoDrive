export const Booking = () => {
  return (
    <div className="px-5 lg:px-20 mt-20">
      <div
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="flex flex-col gap-4 items-center justify-center"
      >
        <h1 className="text-3xl font-bold capitalize">how it work</h1>
        <p className="text-gray-600 text-base lg:w-3/5 text-center">
          Temukan betapa mudahnya memiliki mobil listrik premium kami. Ikuti
          langkah-langkah sederhana ini untuk memulai perjalanan Anda menuju
          masa depan yang lebih hijau.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-10 gap-10"
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src="/img/choose.png"
            alt="choose"
            className="w-20 h-20 object-cover"
          />
          <h1 className="text-xl font-bold capitalize mt-5">
            Choose Electric Car
          </h1>
          <p className="text-gray-600 text-base mt-5 text-center">
            Telusuri berbagai pilihan mobil listrik kami dan pilih model yang
            paling sesuai dengan kebutuhan dan preferensi Anda.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/img/completed.png"
            alt="customer-service"
            className="w-20 h-20 object-cover"
          />
          <h1 className="text-xl font-bold capitalize mt-5 text-center">
            Complete Your Transaction
          </h1>
          <p className="text-gray-600 text-base mt-5 text-center">
            Lengkapi data Anda untuk memudahkan proses pembayaran dan memastikan
            transaksi berjalan dengan lancar.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/img/transfer.png"
            alt="transfer"
            className="w-20 h-20 object-cover"
          />
          <h1 className="text-xl font-bold capitalize mt-5">
            Complete Your Purchase
          </h1>
          <p className="text-gray-600 text-base mt-5 text-center">
            Selesaikan pesanan Anda dengan melakukan pembayaran secara aman
            online atau di showroom kami.
          </p>
        </div>
      </div>
    </div>
  );
};
