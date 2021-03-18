$(function(){
    let data = [
        [brand='深圳渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=100,retailPrice=20],
        [brand='广州渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=100,retailPrice=20],
        [brand='惠州渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=10,retailPrice=20],
        [brand='浙江渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=50,retailPrice=20],
        [brand='台湾渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=52,retailPrice=20],
        [brand='香港渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=42,retailPrice=20],
        [brand='澳门渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=87,retailPrice=20],
        [brand='珠海渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=254,retailPrice=20],
        [brand='广西渔具',merchandise='仕挂类,,',specification='普京仕挂三角牙,号数,伊豆3#,',units='PCS',inventory=542,retailPrice=20]
    ]
    data.forEach((value) => {
        let Html = `<tr>
                        <td><input type="checkbox" name="checkboxBtn" /></td>
                        <td>${value[0]}</td>
                        <td>${value[1]}</td>
                        <td>${value[2]}</td>
                        <td>${value[3]}</td>
                        <td>${value[4]}</td>
                        <td>${value[5]}</td>
                    </tr>`
        $(".right_form_1 tbody").append(Html)
    })
})