import { FORMAT_VACXIN, TYPE_VACXIN, TYPE_VACXIN_OPTION } from './enum';
import { Vacxin } from '../models/Vacxin';

export const vacxin: Vacxin[] = [
  {
    id: '1',
    title: 'VẮC XIN PHÒNG UNG THƯ CỔ TỬ CUNG GARDASIL',
    madeIn: 'MSD (USA)',
    note: 'Ung thư cổ tử cung',
    price: 1790000,
    description:
      'Ung thư cổ tử cung, âm hộ, âm đạo, các tổn thương tiền ung thư và loạn sản, mụn cóc sinh dục và bệnh lý do nhiễm virus HPV',
    isChoose: false,
    isUpdating: false,
    formatVacxin: FORMAT_VACXIN.Packet,
    typeVacxin: TYPE_VACXIN.Adult,
    typeOption: TYPE_VACXIN_OPTION.Packet_2_10,
    info: `<div class=""
    ><i style="color: red"> </i>
    <div class="h4 text-primary font-weight-bold text-uppercase">
      MÔ TẢ THÔNG TIN VẮC XIN : GÓI VẮC XIN INFANRIX – ROTARIX - VARILRIX (0-24
      tháng)
    </div>
    <div class="vaccine-content"
      ><div class="d-flex flex-column pt-4 vaccine-content"
        ><p
          >Giai đoạn bé từ 0-24 tháng tuổi là giai đoạn phát triển vượt bậc về
          nhận thức, cũng chính là lúc trẻ đi học, khám phá thế giới, tiếp xúc với
          môi trường bên ngoài vốn tiềm ẩn nhiều mầm bệnh nguy hiểm. Tiêm vắc xin
          phòng bệnh cho trẻ ở giai đoạn này chính là cách bảo vệ bé tối đa và
          toàn diện nhất.</p
        >
        <p
          >Với tổng 12 loại vắc xin gồm 24 liều cơ bản,
          <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong> cung cấp các
          loại vắc xin phòng được hàng loạt bệnh truyền nhiễm nguy hiểm, không sợ
          hết vắc xin, kể cả các vắc xin thường xuyên khan hiếm trên thị trường
          như vắc xin Infanrix, vắc xin Rotateq, vắc xin Synflorix…Vắc xin sau khi
          được mua gói hoặc mua đặt trước sẽ được lưu trữ và bảo quản lên tới 2
          năm, luôn sẵn sàng cho bé tiêm đúng lịch, không để bé bị nhỡ lịch bất kỳ
          một mũi tiêm nào.</p
        >
        <p
          >Sử dụng <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong>,
          khách hàng sẽ được nhận nhiều ưu đãi hấp dẫn:</p
        >
        <ul>
          <li
            >Được đặt giữ đầy đủ các loại vắc xin trong gói, đảm bảo được tiêm vắc
            xin đúng lịch.</li
          >
          <li
            >Dễ dàng tra cứu lịch sử tiêm chủng online với mã code định danh.</li
          >
          <li
            >Được tư vấn, khám sàng lọc trước tiêm, nhắc lịch tiêm hoàn toàn miễn
            phí.</li
          >
          <li
            >Đặc biệt, giá vắc xin và các ưu đãi khác đều được giữ nguyên trong
            suốt thời gian sử dụng.</li
          >
          <li>Được mua gói vắc xin trả góp không lãi suất trong 6 tháng.</li>
        </ul>
        <p><strong>DANH MỤC MŨI TIÊM</strong></p>
        <p>1. Vắc xin Rotarix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Tiêu chảy do rotavirus</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>2. Vắc xin Infanrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB, Viêm gan B (6 in 1)</li
          >
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>3. Vắc xin Pentaxim</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB (5 in 1)</li
          >
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>4. Vắc xin Synflorix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Hội chứng nhiễm trùng, viêm màng não, viêm phổi, nhiễm
            khuẩn huyết, viêm tai giữa do phế cầu</li
          >
          <li>Số mũi tiêm: 4</li>
        </ul>
        <p>5. Vắc xin Vaxigrip tetra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li>Phòng bệnh: Cúm</li>
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>6. Vắc xin Mvvac</p>
        <ul>
          <li>Nước sản xuất: Polyvac/Việt Nam</li>
          <li>Phòng bệnh: Sởi</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>7. Vắc xin MMR II</p>
        <ul>
          <li>Nước sản xuất: MSD/Mỹ</li>
          <li>Phòng bệnh: Sởi - Quai bị - Rubella</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>8. Vắc xin Twinrix</p>
        <ul>
          <li>Nước sản xuất: GSK/ Bỉ</li>
          <li>Phòng bệnh: Viêm gan A, B</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>9. Vắc xin Varilrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Thủy đậu</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>10. Vắc xin Imojev</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Thái Lan</li>
          <li>Phòng bệnh: Viêm não Nhật Bản</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>11. Vắc xin Menactra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Mỹ</li>
          <li>Phòng bệnh: Viêm màng não ACYW</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>12. Vắc xin Typhoid Vi</p>
        <ul>
          <li>Nước sản xuất: Davac/Việt Nam</li>
          <li>Phòng bệnh: Thương hàn</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p><strong>TỔNG SỐ LIỀU: 24</strong></p>
        <p><strong>GIÁ GÓI: 22.725.000</strong></p>
      </div></div
    ></div
  >`,
  },
  {
    id: '2',
    title: 'VẮC XIN PHÒNG UNG THƯ CỔ TỬ CUNG GARDASIL',
    madeIn: 'MSD (USA)',
    note: 'Ung thư cổ tử cung',
    price: 1790000,
    description:
      'Ung thư cổ tử cung, âm hộ, âm đạo, các tổn thương tiền ung thư và loạn sản, mụn cóc sinh dục và bệnh lý do nhiễm virus HPV',
    isChoose: false,
    isUpdating: false,
    formatVacxin: FORMAT_VACXIN.Simple,
    typeVacxin: TYPE_VACXIN.PreStudent,
    typeOption: TYPE_VACXIN_OPTION.Age_4_6,
    info: `<div class=""
    ><i style="color: red"> </i>
    <div class="h4 text-primary font-weight-bold text-uppercase">
      MÔ TẢ THÔNG TIN VẮC XIN : GÓI VẮC XIN INFANRIX – ROTARIX - VARILRIX (0-24
      tháng)
    </div>
    <div class="vaccine-content"
      ><div class="d-flex flex-column pt-4 vaccine-content"
        ><p
          >Giai đoạn bé từ 0-24 tháng tuổi là giai đoạn phát triển vượt bậc về
          nhận thức, cũng chính là lúc trẻ đi học, khám phá thế giới, tiếp xúc với
          môi trường bên ngoài vốn tiềm ẩn nhiều mầm bệnh nguy hiểm. Tiêm vắc xin
          phòng bệnh cho trẻ ở giai đoạn này chính là cách bảo vệ bé tối đa và
          toàn diện nhất.</p
        >
        <p
          >Với tổng 12 loại vắc xin gồm 24 liều cơ bản,
          <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong> cung cấp các
          loại vắc xin phòng được hàng loạt bệnh truyền nhiễm nguy hiểm, không sợ
          hết vắc xin, kể cả các vắc xin thường xuyên khan hiếm trên thị trường
          như vắc xin Infanrix, vắc xin Rotateq, vắc xin Synflorix…Vắc xin sau khi
          được mua gói hoặc mua đặt trước sẽ được lưu trữ và bảo quản lên tới 2
          năm, luôn sẵn sàng cho bé tiêm đúng lịch, không để bé bị nhỡ lịch bất kỳ
          một mũi tiêm nào.</p
        >
        <p
          >Sử dụng <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong>,
          khách hàng sẽ được nhận nhiều ưu đãi hấp dẫn:</p
        >
        <ul>
          <li
            >Được đặt giữ đầy đủ các loại vắc xin trong gói, đảm bảo được tiêm vắc
            xin đúng lịch.</li
          >
          <li
            >Dễ dàng tra cứu lịch sử tiêm chủng online với mã code định danh.</li
          >
          <li
            >Được tư vấn, khám sàng lọc trước tiêm, nhắc lịch tiêm hoàn toàn miễn
            phí.</li
          >
          <li
            >Đặc biệt, giá vắc xin và các ưu đãi khác đều được giữ nguyên trong
            suốt thời gian sử dụng.</li
          >
          <li>Được mua gói vắc xin trả góp không lãi suất trong 6 tháng.</li>
        </ul>
        <p><strong>DANH MỤC MŨI TIÊM</strong></p>
        <p>1. Vắc xin Rotarix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Tiêu chảy do rotavirus</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>2. Vắc xin Infanrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB, Viêm gan B (6 in 1)</li
          >
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>3. Vắc xin Pentaxim</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB (5 in 1)</li
          >
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>4. Vắc xin Synflorix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Hội chứng nhiễm trùng, viêm màng não, viêm phổi, nhiễm
            khuẩn huyết, viêm tai giữa do phế cầu</li
          >
          <li>Số mũi tiêm: 4</li>
        </ul>
        <p>5. Vắc xin Vaxigrip tetra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li>Phòng bệnh: Cúm</li>
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>6. Vắc xin Mvvac</p>
        <ul>
          <li>Nước sản xuất: Polyvac/Việt Nam</li>
          <li>Phòng bệnh: Sởi</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>7. Vắc xin MMR II</p>
        <ul>
          <li>Nước sản xuất: MSD/Mỹ</li>
          <li>Phòng bệnh: Sởi - Quai bị - Rubella</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>8. Vắc xin Twinrix</p>
        <ul>
          <li>Nước sản xuất: GSK/ Bỉ</li>
          <li>Phòng bệnh: Viêm gan A, B</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>9. Vắc xin Varilrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Thủy đậu</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>10. Vắc xin Imojev</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Thái Lan</li>
          <li>Phòng bệnh: Viêm não Nhật Bản</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>11. Vắc xin Menactra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Mỹ</li>
          <li>Phòng bệnh: Viêm màng não ACYW</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>12. Vắc xin Typhoid Vi</p>
        <ul>
          <li>Nước sản xuất: Davac/Việt Nam</li>
          <li>Phòng bệnh: Thương hàn</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p><strong>TỔNG SỐ LIỀU: 24</strong></p>
        <p><strong>GIÁ GÓI: 22.725.000</strong></p>
      </div></div
    ></div
  >`,
  },
  {
    id: '3',
    title: 'VẮC XIN PHÒNG UNG THƯ CỔ TỬ CUNG GARDASIL',
    madeIn: 'MSD (USA)',
    note: 'Ung thư cổ tử cung',
    price: 1790000,
    description:
      'Ung thư cổ tử cung, âm hộ, âm đạo, các tổn thương tiền ung thư và loạn sản, mụn cóc sinh dục và bệnh lý do nhiễm virus HPV',
    isChoose: false,
    isUpdating: false,
    formatVacxin: FORMAT_VACXIN.Packet,
    typeVacxin: TYPE_VACXIN.Teenager,
    typeOption: TYPE_VACXIN_OPTION.Age_9_18,
    info: `<div class=""
    ><i style="color: red"> </i>
    <div class="h4 text-primary font-weight-bold text-uppercase">
      MÔ TẢ THÔNG TIN VẮC XIN : GÓI VẮC XIN INFANRIX – ROTARIX - VARILRIX (0-24
      tháng)
    </div>
    <div class="vaccine-content"
      ><div class="d-flex flex-column pt-4 vaccine-content"
        ><p
          >Giai đoạn bé từ 0-24 tháng tuổi là giai đoạn phát triển vượt bậc về
          nhận thức, cũng chính là lúc trẻ đi học, khám phá thế giới, tiếp xúc với
          môi trường bên ngoài vốn tiềm ẩn nhiều mầm bệnh nguy hiểm. Tiêm vắc xin
          phòng bệnh cho trẻ ở giai đoạn này chính là cách bảo vệ bé tối đa và
          toàn diện nhất.</p
        >
        <p
          >Với tổng 12 loại vắc xin gồm 24 liều cơ bản,
          <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong> cung cấp các
          loại vắc xin phòng được hàng loạt bệnh truyền nhiễm nguy hiểm, không sợ
          hết vắc xin, kể cả các vắc xin thường xuyên khan hiếm trên thị trường
          như vắc xin Infanrix, vắc xin Rotateq, vắc xin Synflorix…Vắc xin sau khi
          được mua gói hoặc mua đặt trước sẽ được lưu trữ và bảo quản lên tới 2
          năm, luôn sẵn sàng cho bé tiêm đúng lịch, không để bé bị nhỡ lịch bất kỳ
          một mũi tiêm nào.</p
        >
        <p
          >Sử dụng <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong>,
          khách hàng sẽ được nhận nhiều ưu đãi hấp dẫn:</p
        >
        <ul>
          <li
            >Được đặt giữ đầy đủ các loại vắc xin trong gói, đảm bảo được tiêm vắc
            xin đúng lịch.</li
          >
          <li
            >Dễ dàng tra cứu lịch sử tiêm chủng online với mã code định danh.</li
          >
          <li
            >Được tư vấn, khám sàng lọc trước tiêm, nhắc lịch tiêm hoàn toàn miễn
            phí.</li
          >
          <li
            >Đặc biệt, giá vắc xin và các ưu đãi khác đều được giữ nguyên trong
            suốt thời gian sử dụng.</li
          >
          <li>Được mua gói vắc xin trả góp không lãi suất trong 6 tháng.</li>
        </ul>
        <p><strong>DANH MỤC MŨI TIÊM</strong></p>
        <p>1. Vắc xin Rotarix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Tiêu chảy do rotavirus</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>2. Vắc xin Infanrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB, Viêm gan B (6 in 1)</li
          >
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>3. Vắc xin Pentaxim</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB (5 in 1)</li
          >
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>4. Vắc xin Synflorix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Hội chứng nhiễm trùng, viêm màng não, viêm phổi, nhiễm
            khuẩn huyết, viêm tai giữa do phế cầu</li
          >
          <li>Số mũi tiêm: 4</li>
        </ul>
        <p>5. Vắc xin Vaxigrip tetra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li>Phòng bệnh: Cúm</li>
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>6. Vắc xin Mvvac</p>
        <ul>
          <li>Nước sản xuất: Polyvac/Việt Nam</li>
          <li>Phòng bệnh: Sởi</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>7. Vắc xin MMR II</p>
        <ul>
          <li>Nước sản xuất: MSD/Mỹ</li>
          <li>Phòng bệnh: Sởi - Quai bị - Rubella</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>8. Vắc xin Twinrix</p>
        <ul>
          <li>Nước sản xuất: GSK/ Bỉ</li>
          <li>Phòng bệnh: Viêm gan A, B</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>9. Vắc xin Varilrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Thủy đậu</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>10. Vắc xin Imojev</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Thái Lan</li>
          <li>Phòng bệnh: Viêm não Nhật Bản</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>11. Vắc xin Menactra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Mỹ</li>
          <li>Phòng bệnh: Viêm màng não ACYW</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>12. Vắc xin Typhoid Vi</p>
        <ul>
          <li>Nước sản xuất: Davac/Việt Nam</li>
          <li>Phòng bệnh: Thương hàn</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p><strong>TỔNG SỐ LIỀU: 24</strong></p>
        <p><strong>GIÁ GÓI: 22.725.000</strong></p>
      </div></div
    ></div
  >`,
  },
  {
    id: '4',
    title: 'VẮC XIN PHÒNG UNG THƯ CỔ TỬ CUNG GARDASIL',
    madeIn: 'MSD (USA)',
    note: 'Ung thư cổ tử cung',
    price: 1790000,
    description:
      'Ung thư cổ tử cung, âm hộ, âm đạo, các tổn thương tiền ung thư và loạn sản, mụn cóc sinh dục và bệnh lý do nhiễm virus HPV',
    isChoose: false,
    isUpdating: false,
    formatVacxin: FORMAT_VACXIN.Simple,
    typeVacxin: TYPE_VACXIN.Requiment,
    info: `<div class=""
    ><i style="color: red"> </i>
    <div class="h4 text-primary font-weight-bold text-uppercase">
      MÔ TẢ THÔNG TIN VẮC XIN : GÓI VẮC XIN INFANRIX – ROTARIX - VARILRIX (0-24
      tháng)
    </div>
    <div class="vaccine-content"
      ><div class="d-flex flex-column pt-4 vaccine-content"
        ><p
          >Giai đoạn bé từ 0-24 tháng tuổi là giai đoạn phát triển vượt bậc về
          nhận thức, cũng chính là lúc trẻ đi học, khám phá thế giới, tiếp xúc với
          môi trường bên ngoài vốn tiềm ẩn nhiều mầm bệnh nguy hiểm. Tiêm vắc xin
          phòng bệnh cho trẻ ở giai đoạn này chính là cách bảo vệ bé tối đa và
          toàn diện nhất.</p
        >
        <p
          >Với tổng 12 loại vắc xin gồm 24 liều cơ bản,
          <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong> cung cấp các
          loại vắc xin phòng được hàng loạt bệnh truyền nhiễm nguy hiểm, không sợ
          hết vắc xin, kể cả các vắc xin thường xuyên khan hiếm trên thị trường
          như vắc xin Infanrix, vắc xin Rotateq, vắc xin Synflorix…Vắc xin sau khi
          được mua gói hoặc mua đặt trước sẽ được lưu trữ và bảo quản lên tới 2
          năm, luôn sẵn sàng cho bé tiêm đúng lịch, không để bé bị nhỡ lịch bất kỳ
          một mũi tiêm nào.</p
        >
        <p
          >Sử dụng <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong>,
          khách hàng sẽ được nhận nhiều ưu đãi hấp dẫn:</p
        >
        <ul>
          <li
            >Được đặt giữ đầy đủ các loại vắc xin trong gói, đảm bảo được tiêm vắc
            xin đúng lịch.</li
          >
          <li
            >Dễ dàng tra cứu lịch sử tiêm chủng online với mã code định danh.</li
          >
          <li
            >Được tư vấn, khám sàng lọc trước tiêm, nhắc lịch tiêm hoàn toàn miễn
            phí.</li
          >
          <li
            >Đặc biệt, giá vắc xin và các ưu đãi khác đều được giữ nguyên trong
            suốt thời gian sử dụng.</li
          >
          <li>Được mua gói vắc xin trả góp không lãi suất trong 6 tháng.</li>
        </ul>
        <p><strong>DANH MỤC MŨI TIÊM</strong></p>
        <p>1. Vắc xin Rotarix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Tiêu chảy do rotavirus</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>2. Vắc xin Infanrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB, Viêm gan B (6 in 1)</li
          >
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>3. Vắc xin Pentaxim</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB (5 in 1)</li
          >
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>4. Vắc xin Synflorix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Hội chứng nhiễm trùng, viêm màng não, viêm phổi, nhiễm
            khuẩn huyết, viêm tai giữa do phế cầu</li
          >
          <li>Số mũi tiêm: 4</li>
        </ul>
        <p>5. Vắc xin Vaxigrip tetra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li>Phòng bệnh: Cúm</li>
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>6. Vắc xin Mvvac</p>
        <ul>
          <li>Nước sản xuất: Polyvac/Việt Nam</li>
          <li>Phòng bệnh: Sởi</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>7. Vắc xin MMR II</p>
        <ul>
          <li>Nước sản xuất: MSD/Mỹ</li>
          <li>Phòng bệnh: Sởi - Quai bị - Rubella</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>8. Vắc xin Twinrix</p>
        <ul>
          <li>Nước sản xuất: GSK/ Bỉ</li>
          <li>Phòng bệnh: Viêm gan A, B</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>9. Vắc xin Varilrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Thủy đậu</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>10. Vắc xin Imojev</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Thái Lan</li>
          <li>Phòng bệnh: Viêm não Nhật Bản</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>11. Vắc xin Menactra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Mỹ</li>
          <li>Phòng bệnh: Viêm màng não ACYW</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>12. Vắc xin Typhoid Vi</p>
        <ul>
          <li>Nước sản xuất: Davac/Việt Nam</li>
          <li>Phòng bệnh: Thương hàn</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p><strong>TỔNG SỐ LIỀU: 24</strong></p>
        <p><strong>GIÁ GÓI: 22.725.000</strong></p>
      </div></div
    ></div
  >`,
  },
  {
    id: '5',
    title: 'VẮC XIN PHÒNG UNG THƯ CỔ TỬ CUNG GARDASIL',
    madeIn: 'MSD (USA)',
    note: 'Ung thư cổ tử cung',
    price: 1790000,
    description:
      'Ung thư cổ tử cung, âm hộ, âm đạo, các tổn thương tiền ung thư và loạn sản, mụn cóc sinh dục và bệnh lý do nhiễm virus HPV',
    isChoose: false,
    isUpdating: false,
    formatVacxin: FORMAT_VACXIN.Packet,
    typeVacxin: TYPE_VACXIN.Adult,
    typeOption: TYPE_VACXIN_OPTION.Packet_3_13,
    info: `<div class=""
    ><i style="color: red"> </i>
    <div class="h4 text-primary font-weight-bold text-uppercase">
      MÔ TẢ THÔNG TIN VẮC XIN : GÓI VẮC XIN INFANRIX – ROTARIX - VARILRIX (0-24
      tháng)
    </div>
    <div class="vaccine-content"
      ><div class="d-flex flex-column pt-4 vaccine-content"
        ><p
          >Giai đoạn bé từ 0-24 tháng tuổi là giai đoạn phát triển vượt bậc về
          nhận thức, cũng chính là lúc trẻ đi học, khám phá thế giới, tiếp xúc với
          môi trường bên ngoài vốn tiềm ẩn nhiều mầm bệnh nguy hiểm. Tiêm vắc xin
          phòng bệnh cho trẻ ở giai đoạn này chính là cách bảo vệ bé tối đa và
          toàn diện nhất.</p
        >
        <p
          >Với tổng 12 loại vắc xin gồm 24 liều cơ bản,
          <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong> cung cấp các
          loại vắc xin phòng được hàng loạt bệnh truyền nhiễm nguy hiểm, không sợ
          hết vắc xin, kể cả các vắc xin thường xuyên khan hiếm trên thị trường
          như vắc xin Infanrix, vắc xin Rotateq, vắc xin Synflorix…Vắc xin sau khi
          được mua gói hoặc mua đặt trước sẽ được lưu trữ và bảo quản lên tới 2
          năm, luôn sẵn sàng cho bé tiêm đúng lịch, không để bé bị nhỡ lịch bất kỳ
          một mũi tiêm nào.</p
        >
        <p
          >Sử dụng <strong>Gói vắc xin Infanrix - Rotarix - Varilrix</strong>,
          khách hàng sẽ được nhận nhiều ưu đãi hấp dẫn:</p
        >
        <ul>
          <li
            >Được đặt giữ đầy đủ các loại vắc xin trong gói, đảm bảo được tiêm vắc
            xin đúng lịch.</li
          >
          <li
            >Dễ dàng tra cứu lịch sử tiêm chủng online với mã code định danh.</li
          >
          <li
            >Được tư vấn, khám sàng lọc trước tiêm, nhắc lịch tiêm hoàn toàn miễn
            phí.</li
          >
          <li
            >Đặc biệt, giá vắc xin và các ưu đãi khác đều được giữ nguyên trong
            suốt thời gian sử dụng.</li
          >
          <li>Được mua gói vắc xin trả góp không lãi suất trong 6 tháng.</li>
        </ul>
        <p><strong>DANH MỤC MŨI TIÊM</strong></p>
        <p>1. Vắc xin Rotarix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Tiêu chảy do rotavirus</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>2. Vắc xin Infanrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB, Viêm gan B (6 in 1)</li
          >
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>3. Vắc xin Pentaxim</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li
            >Phòng bệnh: Ho gà, Bạch hầu, Uốn ván, Bại liệt, Viêm màng não mủ,
            Viêm họng, Viêm phổi do HIB (5 in 1)</li
          >
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>4. Vắc xin Synflorix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li
            >Phòng bệnh: Hội chứng nhiễm trùng, viêm màng não, viêm phổi, nhiễm
            khuẩn huyết, viêm tai giữa do phế cầu</li
          >
          <li>Số mũi tiêm: 4</li>
        </ul>
        <p>5. Vắc xin Vaxigrip tetra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Pháp</li>
          <li>Phòng bệnh: Cúm</li>
          <li>Số mũi tiêm: 3</li>
        </ul>
        <p>6. Vắc xin Mvvac</p>
        <ul>
          <li>Nước sản xuất: Polyvac/Việt Nam</li>
          <li>Phòng bệnh: Sởi</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>7. Vắc xin MMR II</p>
        <ul>
          <li>Nước sản xuất: MSD/Mỹ</li>
          <li>Phòng bệnh: Sởi - Quai bị - Rubella</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p>8. Vắc xin Twinrix</p>
        <ul>
          <li>Nước sản xuất: GSK/ Bỉ</li>
          <li>Phòng bệnh: Viêm gan A, B</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>9. Vắc xin Varilrix</p>
        <ul>
          <li>Nước sản xuất: GSK/Bỉ</li>
          <li>Phòng bệnh: Thủy đậu</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>10. Vắc xin Imojev</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Thái Lan</li>
          <li>Phòng bệnh: Viêm não Nhật Bản</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>11. Vắc xin Menactra</p>
        <ul>
          <li>Nước sản xuất: Sanofi/Mỹ</li>
          <li>Phòng bệnh: Viêm màng não ACYW</li>
          <li>Số mũi tiêm: 2</li>
        </ul>
        <p>12. Vắc xin Typhoid Vi</p>
        <ul>
          <li>Nước sản xuất: Davac/Việt Nam</li>
          <li>Phòng bệnh: Thương hàn</li>
          <li>Số mũi tiêm: 1</li>
        </ul>
        <p><strong>TỔNG SỐ LIỀU: 24</strong></p>
        <p><strong>GIÁ GÓI: 22.725.000</strong></p>
      </div></div
    ></div
  >`,
  },
];
