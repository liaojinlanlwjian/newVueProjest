 <template>
     <div id="app">
       <el-table :data="itemList" border fit highlight-current-row style="width: 100%;" class="tb-edit">
       <el-table-column label="场景ID" prop="placeId" width="180"></el-table-column>
       <el-table-column label="建筑物ID" prop="buildingId" width="110px" align="center"></el-table-column>
       <el-table-column label="楼层ID" prop="floorId" width="110px" align="center"></el-table-column>
       <el-table-column label="经度(左下)" prop="leftLowerLon" width="110px" align="center"></el-table-column>
       <el-table-column label="纬度(左下)" prop="leftLowerLat" width="110px" align="center"></el-table-column>
       <el-table-column label="经度(右上)" prop="rightUpperLon" width="110px" align="center"></el-table-column>
       <el-table-column label="纬度(右上)" prop="rightUpperLat" width="110px" align="center"></el-table-column>
      <el-table-column label="旋转角度" prop="rotationAngle" width="110px" align="center"></el-table-column>
      <el-table-column label="缩放比例" prop="scaling" width="110px" align="center"></el-table-column>
       <!-- <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
         <template slot-scope="{ row, $index }">
           <el-button type="primary" size="mini" @click="handleUpdate(row)">编辑</el-button>
           <el-button
             v-if="row.status != 'deleted'"
             size="mini"
             type="danger"
             @click="handleDelete($index, row)"
           >删除</el-button>
         </template>
       </el-table-column> -->
     </el-table>
     
     </div>
 </template>
<script>
    import axios from "axios";
    export default {
        name: "app",
        data() {
            return {
                itemList: [],
            };
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                axios.get('http://localhost:3000/itemtList').then(response => {
                    console.log(response.data);
					this.itemList = response.data;
                }, response => {
                    console.log("error");
                });
            }
        }
    }
</script>


